const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      <h1>Iniciar Sesión</h1>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
