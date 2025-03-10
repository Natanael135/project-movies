import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-primary border-t border-black/10 pt-16 pb-8"
    >
      <div className="max-w-[80rem] mx-auto px-6 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
        {/* Seção 1: Sobre */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Natanael Melo</h3>
          <p className="text-light-200 leading-relaxed mb-6">
            Desenvolvedor Front-end focado em criar experiências web incríveis e
            intuitivas.
          </p>
          <div className="flex flex-row gap-6 items-center justify-start">
            <a
              href="https://github.com/Natanael135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-200 flex items-center gap-2"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/natanaelsmelo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-200 flex items-center gap-2"
            >
              <i className="bx bxl-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Seção 2: Contato */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
          <p className="text-light-200 leading-relaxed mb-6">
            Vamos trabalhar juntos? Entre em contato!
          </p>
          <div className="flex flex-col gap-4 justify-start">
            <a
              href="https://wa.me/5588996559305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-200 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                />
              </svg>
              WhatsApp
            </a>

            <a
              href="mailto:natanaelmelo.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-200 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="text-center text-light-200 text-sm mt-12">
        &copy; {year} - by Natanael Melo. Made with React.js
      </div>
    </footer>
  );
}

export default Footer;
