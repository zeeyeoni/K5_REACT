import React from 'react'

export default function TailSelect({optionItem, handleChange}) {

    const option = optionItem.map((item, idx) => 
                    <option key={`option${idx}`} value={item}>{item}</option>

    );

    return (
    <select 
            onChange={handleChange}
            className="m-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-200 dark:focus:border-lime-200">
            <option value="">-----지역 선택하기 :D-----</option>
              {option}
    </select>
  )
}
