import { useState } from "react";
import "./contacts.scss";
import { FaInstagramSquare, FaGithub, FaFacebook } from "react-icons/fa";
import Logo from '../img/icons/web-dev.png'

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacyPolicy: false,
  });

  const changeData = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();

    const response = await fetch('/send', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message envoyé avec succès');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacyPolicy: false,
      });
    } else {
      alert('Une erreur est survenue, veuillez réessayer');
    }
  };

  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts_wrapper">
          <div>
            <img src={Logo} alt="#" />
          </div>
          <div className="contacts_descr">
            <h5 className="contacts_title">Contact</h5>
            <div className="subtitle">Prendre contact avec moi</div>
            <div className="divider"></div>
            <div className="title title_fz14-contacts contacts_text">
              Vous pouvez me contacter via les réseaux sociaux
            </div>
            <div className="contacts_social">
              <a href="#" className="contacts_link"><FaFacebook /></a>
              <a href="#" className="contacts_link"><FaGithub /></a>
              <a href="#" className="contacts_link"><FaInstagramSquare /></a>
            </div>
            <div className="title title_fz14-contacts contacts_text">
              Laissez-moi vos coordonnées, je prendrai contact avec vous
            </div>
            <form onSubmit={submitData} className="contacts_form">
              <div className="contacts_input">
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={changeData}
                  required
                />
                <label htmlFor="name">Votre nom :</label>
              </div>
              <div className="contacts_input">
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={changeData}
                  required
                />
                <label htmlFor="email">Votre email :</label>
              </div>
              <div className="contacts_input">
                <input
                  name="phone"
                  id="phone"
                  type="tel"
                  placeholder="Votre numéro"
                  value={formData.phone}
                  onChange={changeData}
                />
                <label htmlFor="phone">Votre numéro :</label>
              </div>
              <div className="contacts_textarea">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={changeData}
                  required
                />
                <label htmlFor="message">Votre message</label>
              </div>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={changeData}
                  required
                />
                <span htmlFor="privacy-policy">
                  Je suis d'accord avec la politique de confidentialité
                </span>
              </div>

              <button type="submit" className="contacts_btns btns">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;