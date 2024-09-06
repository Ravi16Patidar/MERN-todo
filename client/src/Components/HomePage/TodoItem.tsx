import React from 'react';

const TodoItem = ({ id, title, subtitle, onDelete, onEdit }:any) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            onDelete(id);
        }
    };


    return (
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
            <div>
                <h2 className="text-blue-600 font-bold">{title}</h2>
                <p className="text-gray-500">{subtitle}</p>
            </div>
            <div className="flex space-x-2 ml-auto">
                <i className="fas fa-pen text-blue-600 cursor-pointer" onClick={() => onEdit(id, title, subtitle)}></i>
                <i className="fas fa-trash text-red-600 cursor-pointer" onClick={handleDelete}></i>
            </div>
        </div>
    );
};

export default TodoItem;
