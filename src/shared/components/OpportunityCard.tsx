const OpportunityCard = ({
  title,
  description,
  image,
  type,
}: {
  title: string;
  description: string;
  image: string;
  type: 'Mentoría' | 'Proyecto';
}) => (
  <div className="2xl bg-theme-bg-secondary p-3 rounded-lg shadow-md w-80 flex flex-col gap-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <img
      src={image}
      alt={`${type} image`}
      className="w-full h-40 object-cover rounded-lg mb-2"
    />
    <span
      className={`py-1 px-2 border rounded-lg w-fit text-xs ${type === 'Mentoría' ? 'text-blue-500 border-blue-500' : 'text-red-500 border-red-500 '}`}
    >
      {type}
    </span>
    <h3 className="font-semibold text-theme-text-dark">{title}</h3>
    <p className="text-theme-text-muted">{description}</p>
  </div>
);

export default OpportunityCard;
