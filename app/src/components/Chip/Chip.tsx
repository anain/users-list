import "./Chip.scss";

type Props = {
  icon: string;
  label: string;
};

const Chip = ({ icon, label }: Props) => {
  return (
    <div className="ds-chip">
      <img src={icon} />
      <span>{label}</span>
    </div>
  );
};

export default Chip;
