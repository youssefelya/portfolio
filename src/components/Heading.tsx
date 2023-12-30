import PropTypes from "prop-types";

type HeadingProps = {
  firstWord: string;
  secondWord: string;
};

const Heading = (props: HeadingProps) => {
  return (
    <div className="heading hero-text">
      <h1>
        &lt;
        {props.firstWord}
        <span>{props.secondWord}/&gt;</span>
      </h1>
    </div>
  );
};

export default Heading;
