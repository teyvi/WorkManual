import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const DocSection = ({ section, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mt-${level * 2} border-l-${level * 2} border-gray-200 font-serif scroll-smooth`}>
      <button
        className="flex justify-between items-center w-full text-left p-4 hover:bg-gray-50"
        onClick={toggleSection}
      >
        <span className={`text-${18 - level * 2}px font-semibold text-gray-800 flex items-center`}>
          {section.icon}
          <span className="ml-2">{section.title}</span>
        </span>
        {isOpen ? (
          <ChevronDown className="text-gray-500" />
        ) : (
          <ChevronRight className="text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 pl-6">
          <p className="text-gray-600 mb-4">{section.content}</p>
          {section.steps && (
            <ol className="list-decimal pl-5 space-y-2">
              {section.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="text-gray-700">{step}</li>
              ))}
            </ol>
          )}
          {section.note && (
            <p className="mt-4 text-sm text-gray-500 italic">{section.note}</p>
          )}
          {section.subsections && section.subsections.map((subsection, index) => (
            <DocSection key={index} section={subsection} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const FeatureDocumentation = ({ title, description, sections }) => {
  return (
    <div className="w-full bg-white shadow-lg  overflow-hidden scroll-smooth flex flex-col items-start">
      <div className=" bg-[#21a179] p-6 text-white w-full">
        <h2 className="text-2xl font-bold flex items-center">
          {title}
        </h2>
        <p className="mt-2 text-gray-100">{description}</p>
      </div>
      <div className="w-full divide-y divide-gray-200">
        {sections.map((section, index) => (
          <DocSection key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

export default FeatureDocumentation;