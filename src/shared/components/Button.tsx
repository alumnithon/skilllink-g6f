interface ButtonProps {
  title: string;
  styles?: string;
  onClick?: () => void;
}

export const ButtonPrimary = ({ title, styles, onClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`w-full bg-theme-button-primary py-3 rounded-lg font-semibold text-lg hover:bg-theme-button-primary/60 transition ${styles || ''}`}
    >
      {title}
    </button>
  );
};
