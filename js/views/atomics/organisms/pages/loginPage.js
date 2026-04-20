import { handleLogin } from '../../../../controllers/loginController.js';
import { setButton, setForm, setHeading, setSection } from '../../atoms.js';
import { setFormGroup } from '../../molecules.js';

const renderLoginPage = () => {
  const root = document.querySelector('#root');

  const section = setSection();
  const h1 = setHeading(1, 'Login', 'font-bold text-2xl');

  const form = setForm('GET', '');

  const username = setFormGroup('Brugernavn', 'text', 'username', 'Indtast brugernavn');
  const password = setFormGroup('Adgangskode', 'password', 'password', 'Indtast adgangskode');
  const button = setButton('Login', 'submit');

  form.append(username, password, button);
  form.addEventListener('submit', handleLogin);

  section.append(h1, form);
  root.append(section);
};

export default renderLoginPage;
