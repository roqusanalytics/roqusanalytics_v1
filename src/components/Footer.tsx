
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#8e31cc] bg-[linear-gradient(350deg,rgba(142,49,204,1)_0%,rgba(119,134,252,1)_0%,rgba(255,255,255,1)_100%,rgba(162,60,230,1)_100%)] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-[#7786fc]/20 rounded-full blur-[150px] animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] bg-[#7786fc]/30 rounded-full blur-[100px] animate-pulse-glow"></div>
      </div>
      <div className="nexos-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold text-[#262B30] flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-nexos-purple to-nexos-purple-dark flex items-center justify-center">
                <span className="text-[#FFFFFF] font-bold">R</span>
              </div>
              RoqusAnalytics
            </a>
            <p className="text-[#262B30] mb-4">
              Duomenų analitikos sprendimai, padedantys transformuoti jūsų verslą ir atrasti naujas galimybes.
            </p>
            <div className="flex gap-4">
              {['linkedin', 'facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-nexos-dark flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#262B30] font-bold mb-4">Paslaugos</h3>
            <ul className="space-y-2">
              {['Power BI Ataskaitų Kūrimas', 'Power BI Ataskaitų Nuoma', 'Duomenų Valymas', 'SQL Duomenų Bazės', 'Duomenų Modeliavimas'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#262B30] hover:text-nexos-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#262B30] font-bold mb-4">Įmonė</h3>
            <ul className="space-y-2">
              {['Apie mus', 'DUK', 'Kontaktai', 'Partneriai'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#262B30] hover:text-nexos-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#262B30] font-bold mb-4">Kontaktai</h3>
            <ul className="space-y-2 text-[#262B30]">
              <li>Roqus, MB</li>
              <li>📧 contact@roqus.lt</li>
              <li>📞 +370 629 06888</li>
            </ul>
            <div className="mt-4">
              <Link to="/contact-sales">
                <Button className="nexos-button-primary nexos-contact-button text-sm py-2 px-4 rounded-lg w-full">
                  Susisiekti
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-nexos-dark-lighter pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#262B30] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} by roqusanalytics.lt. Sukurta Roqus, MB
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {['Privatumo politika', 'Slapukų politika', 'Saugumas'].map((item) => (
              <a key={item} href="#" className="text-[#262B30] hover:text-nexos-purple transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
