import React from 'react'
import * as RadioGroup from "@radix-ui/react-radio-group";

const RadioButtonGroup = () => (
	<div className='flex justify-center items-center min-h-screen'>
      <form>
      <RadioGroup.Root
        className="space-y-4"
        defaultValue="default"
        aria-label="View density"
      >
        <div className="flex items-center">
          <RadioGroup.Item
            className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center"
            value="default"
            id="radio1"
          >
            <RadioGroup.Indicator className="w-3 h-3 bg-blue-500 rounded-full" />
          </RadioGroup.Item>
          <label className="ml-2 text-gray-800" htmlFor="radio1">
            Default
          </label>
        </div>

        <div className="flex items-center">
          <RadioGroup.Item
            className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center"
            value="comfortable"
            id="radio2"
          >
            <RadioGroup.Indicator className="w-3 h-3 bg-blue-500 rounded-full" />
          </RadioGroup.Item>
          <label className="ml-2 text-gray-800" htmlFor="radio2">
            Option1
          </label>
        </div>

        <div className="flex items-center">
          <RadioGroup.Item
            className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center"
            value="compact"
            id="radio3"
          >
            <RadioGroup.Indicator className="w-3 h-3 bg-blue-500 rounded-full" />
          </RadioGroup.Item>
          <label className="ml-2 text-gray-800" htmlFor="radio3">
            Option2
          </label>
        </div>
      </RadioGroup.Root>
    </form>
  </div>
);

export default RadioButtonGroup;
