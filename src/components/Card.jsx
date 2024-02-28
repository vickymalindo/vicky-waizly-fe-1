import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';

const Card = ({ id, title, body, date }) => {
  const navigate = useNavigate();

  return (
    <div
      className="mx-auto my-4 shadow-lg shadow-slate-700 hover:-translate-y-2 transition-all cursor-pointer"
      onClick={() => navigate(`/note/${id}`)}
    >
      <div className="w-72 border rounded-md h-[262px]">
        <div className="pt-4 pr-4 pl-4 h-[260px]">
          <h5 className="font-bold mb-2 uppercase text-lg w-full text-ellipsis overflow-hidden whitespace-nowrap">
            {title}
          </h5>
          <span className="text-slate-400 inline-block text-sm text-end w-full">
            {showFormattedDate(date)}
          </span>
          <p className="text-[15px] h-[184px] overflow-hidden text-ellipsis">
            {body.length > 231 ? body.slice(0, 230) + '...' : body}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Card;
