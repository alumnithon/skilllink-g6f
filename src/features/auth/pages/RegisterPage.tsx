const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      <h1>Registrarse</h1>
      <form>
        <input type="text" placeholder="Nombre de usuario" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;
