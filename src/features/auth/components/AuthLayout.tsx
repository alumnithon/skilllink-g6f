interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  imageUrl?: string;
}

const AuthLayout = ({
  children,
  title,
  description,
  imageUrl,
}: AuthLayoutProps) => {
  return (
    <div className="flex-1 h-full flex items-center justify-center bg-theme-bg-secondary">
      <div className="flex bg-theme-bg-tertiary rounded-xl shadow overflow-hidden max-w-4xl lg:w-full h-[700px]">
        {imageUrl && (
          <div className="hidden lg:flex items-center justify-center bg-theme-bg-secondary w-1/2">
            <img
              src={imageUrl}
              alt="Auth visual"
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div
          className={`w-full ${imageUrl ? 'lg:w-1/2' : ''} p-4 md:p-8 flex flex-col justify-center gap-4`}
        >
          <h1 className="text-3xl font-bold text-center text-theme-text">
            {title}
          </h1>
          <p className="text-center text-theme-text-secondary mb-2">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
