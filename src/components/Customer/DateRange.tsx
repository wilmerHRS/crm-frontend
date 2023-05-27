import React, { useState, useEffect } from "react";
import { QueryCustomer } from "../../interfaces/customer.interface";

interface Props {
  query: QueryCustomer;
  handleQuery: (q: QueryCustomer) => void;
}

interface Dates {
  startDate: string;
  endDate: string;
}

const initialValues: Dates = {
  startDate: "",
  endDate: "",
};

export const DateRange = ({ query, handleQuery }: Props) => {
  const [dates, setDates] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDates({
      ...dates,
      [e.target.name]: e.target.value,
    });
  };

  const resetDate = () => {
    setDates(initialValues);

    const q = { ...query };
    delete q.startDate;
    delete q.endDate;

    handleQuery(q);
  };

  useEffect(() => {
    if (dates.startDate && dates.endDate) handleQuery({ ...query, ...dates });
  }, [dates]);

  return (
    <div className="d-flex gap-2 align-items-end">
      <div>
        <label htmlFor="date-desde" className="form-label mb-1">
          Desde
        </label>
        <input
          type="date"
          className="form-control"
          id="date-desde"
          name="startDate"
          value={dates.startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date-hasta" className="form-label mb-1">
          Hasta
        </label>
        <input
          type="date"
          className="form-control"
          id="date-hasta"
          name="endDate"
          value={dates.endDate}
          onChange={handleChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={resetDate}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>
    </div>
  );
};
