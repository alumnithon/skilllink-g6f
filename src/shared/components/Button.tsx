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

export const ButtonSecondary = ({ title, styles, onClick }: ButtonProps) => {
  return (
   <button
   type="button"
   onClick={onClick} 
   className={`W-full bg-theme-button-secondary py-3 rounded-lg font-semibold text-lg hover:bg-theme-button-secondary/60 transition ${styles || ''}`}
 >

 {title}
 </button>
  );
};

