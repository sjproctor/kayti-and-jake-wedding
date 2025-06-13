const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.3360702668615!2d-116.23058821450651!3d43.57806903767487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae57e771e1c4d9%3A0x4afa883c20147fbb!2s2707%20Malibu%20Rd%2C%20Boise%2C%20ID%2083705!5e0!3m2!1sen!2sus!4v1749783473488!5m2!1sen!2sus"
      height="450"
      className="h-80 w-screen"
      loading="lazy"
      title="Google Map"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  )
}

export default GoogleMap
