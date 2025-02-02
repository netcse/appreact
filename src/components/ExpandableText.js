import { useState } from "react";

const ExpandableText = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (props.children.length <= props.maxChars) return <p>{props.children}</p>;
  const text = isExpanded
    ? props.children
    : props.children.substring(0, props.maxChars);
  return (
    <p>
      {text}
      {isExpanded ? "" : "..."}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
