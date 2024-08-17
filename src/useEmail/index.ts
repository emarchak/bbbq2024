import emailjs from '@emailjs/browser';

const pubKey = import.meta.env.VITE_EMAILJS_PUBKEY;
const serviceID = import.meta.env.VITE_EMAILJS_SERVICEID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;

export default () => {
  emailjs.init({
    publicKey: pubKey,
    blockHeadless: true,
    limitRate: {
      id: 'bbbq2024',
      throttle: 10000,
    },

  });

  const sendEmail = async (data: Record<string, string>) => {
    const resp = await emailjs.send(serviceID, templateID, data);
    return resp
  }

  return { sendEmail }
}
