import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import RegisterBG from "@/assets/registerbg.jpg";

const Register: React.FC = () => {
  const turnstileRef = useRef(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("COUNTRY/REGION");
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div
      className="mt-[3.2rem] w-screen min-h-[calc(100vh-51.2px)] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${RegisterBG})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="flex flex-col items-center z-10">
        <h1 className="uppercase md:text-3xl text-xl leading-[1.5] tracking-[2px] text-white font-extrabold text-center md:mb-6 mb-2 font-burbank">
          Create&nbsp;&nbsp;Account
        </h1>

        <div className="relative bg-white flex md:flex-row flex-col w-full md:w-[900px] min-h-fit py-10 transition-all">
          <div className="w-full md:w-1/2 px-8 border-r border-gray-200">
            <div className="uppercase font-bold text-sm md:mb-4 mb-5 md:mt-0 mt-4">
              Sign up
            </div>

            <select
              aria-label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full py-5 border border-gray-300 px-3 mb-5 text-sm bg-white appearance-none rounded-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              defaultValue="*Country/Region"
            >
              <option disabled>*Country/Region</option>
              <option value="UNITED STATES">UNITED STATES</option>
              <option value="UNITED KINGDOM">UNITED KINGDOM</option>
              <option value="JAPAN">JAPAN</option>
              <option value="KOREA, REPUBLIC OF">KOREA, REPUBLIC OF</option>
              <option value="CHINA">CHINA</option>
              <option value="AFGHANISTAN">AFGHANISTAN</option>
              <option value="ÅLAND ISLANDS">ÅLAND ISLANDS</option>
              <option value="ALBANIA">ALBANIA</option>
              <option value="ALGERIA">ALGERIA</option>
              <option value="AMERICAN SAMOA">AMERICAN SAMOA</option>
              <option value="ANDORRA">ANDORRA</option>
              <option value="ANGOLA">ANGOLA</option>
              <option value="ANGUILLA">ANGUILLA</option>
              <option value="ANTARCTICA">ANTARCTICA</option>
              <option value="ANTIGUA AND BARBUDA">ANTIGUA AND BARBUDA</option>
              <option value="ARGENTINA">ARGENTINA</option>
              <option value="ARMENIA">ARMENIA</option>
              <option value="ARUBA">ARUBA</option>
              <option value="AUSTRALIA">AUSTRALIA</option>
              <option value="AUSTRIA">AUSTRIA</option>
              <option value="AZERBAIJAN">AZERBAIJAN</option>
              <option value="BAHAMAS">BAHAMAS</option>
              <option value="BAHRAIN">BAHRAIN</option>
              <option value="BANGLADESH">BANGLADESH</option>
              <option value="BARBADOS">BARBADOS</option>
              <option value="BELARUS">BELARUS</option>
              <option value="BELGIUM">BELGIUM</option>
              <option value="BELIZE">BELIZE</option>
              <option value="BENIN">BENIN</option>
              <option value="BERMUDA">BERMUDA</option>
              <option value="BHUTAN">BHUTAN</option>
              <option value="BOLIVIA">BOLIVIA</option>
              <option value="BOSNIA AND HERZEGOVINA">
                BOSNIA AND HERZEGOVINA
              </option>
              <option value="BOTSWANA">BOTSWANA</option>
              <option value="BRAZIL">BRAZIL</option>
              <option value="BRITISH INDIAN OCEAN TERRITORY">
                BRITISH INDIAN OCEAN TERRITORY
              </option>
              <option value="BRUNEI DARUSSALAM">BRUNEI DARUSSALAM</option>
              <option value="BULGARIA">BULGARIA</option>
              <option value="BURKINA FASO">BURKINA FASO</option>
              <option value="BURUNDI">BURUNDI</option>
              <option value="CAMBODIA">CAMBODIA</option>
              <option value="CAMEROON">CAMEROON</option>
              <option value="CANADA">CANADA</option>
              <option value="CAPE VERDE">CAPE VERDE</option>
              <option value="CAYMAN ISLANDS">CAYMAN ISLANDS</option>
              <option value="CENTRAL AFRICAN REPUBLIC">
                CENTRAL AFRICAN REPUBLIC
              </option>
              <option value="CHAD">CHAD</option>
              <option value="CHILE">CHILE</option>
              <option value="COLOMBIA">COLOMBIA</option>
              <option value="COMOROS">COMOROS</option>
              <option value="CONGO">CONGO</option>
              <option value="COSTA RICA">COSTA RICA</option>
              <option value="CROATIA">CROATIA</option>
              <option value="CUBA">CUBA</option>
              <option value="CYPRUS">CYPRUS</option>
              <option value="CZECH REPUBLIC">CZECH REPUBLIC</option>
              <option value="DENMARK">DENMARK</option>
              <option value="DJIBOUTI">DJIBOUTI</option>
              <option value="DOMINICA">DOMINICA</option>
              <option value="DOMINICAN REPUBLIC">DOMINICAN REPUBLIC</option>
              <option value="ECUADOR">ECUADOR</option>
              <option value="EGYPT">EGYPT</option>
              <option value="EL SALVADOR">EL SALVADOR</option>
              <option value="ESTONIA">ESTONIA</option>
              <option value="ESWATINI">ESWATINI</option>
              <option value="ETHIOPIA">ETHIOPIA</option>
              <option value="FIJI">FIJI</option>
              <option value="FINLAND">FINLAND</option>
              <option value="FRANCE">FRANCE</option>
              <option value="FRENCH GUIANA">FRENCH GUIANA</option>
              <option value="FRENCH POLYNESIA">FRENCH POLYNESIA</option>
              <option value="GABON">GABON</option>
              <option value="GAMBIA">GAMBIA</option>
              <option value="GEORGIA">GEORGIA</option>
              <option value="GERMANY">GERMANY</option>
              <option value="GHANA">GHANA</option>
              <option value="GREECE">GREECE</option>
              <option value="GREENLAND">GREENLAND</option>
              <option value="GRENADA">GRENADA</option>
              <option value="GUADELOUPE">GUADELOUPE</option>
              <option value="GUAM">GUAM</option>
              <option value="GUATEMALA">GUATEMALA</option>
              <option value="GUERNSEY">GUERNSEY</option>
              <option value="GUINEA">GUINEA</option>
              <option value="GUINEA-BISSAU">GUINEA-BISSAU</option>
              <option value="GUYANA">GUYANA</option>
              <option value="HAITI">HAITI</option>
              <option value="HOLY SEE">HOLY SEE</option>
              <option value="HONDURAS">HONDURAS</option>
              <option value="HONG KONG">HONG KONG</option>
              <option value="HUNGARY">HUNGARY</option>
              <option value="ICELAND">ICELAND</option>
              <option value="INDIA">INDIA</option>
              <option value="INDONESIA">INDONESIA</option>
              <option value="IRAN">IRAN</option>
              <option value="IRAQ">IRAQ</option>
              <option value="IRELAND">IRELAND</option>
              <option value="ISRAEL">ISRAEL</option>
              <option value="ITALY">ITALY</option>
              <option value="JAMAICA">JAMAICA</option>
              <option value="JORDAN">JORDAN</option>
              <option value="KAZAKHSTAN">KAZAKHSTAN</option>
              <option value="KENYA">KENYA</option>
              <option value="KUWAIT">KUWAIT</option>
              <option value="KYRGYZSTAN">KYRGYZSTAN</option>
              <option value="LAO">LAO</option>
              <option value="LATVIA">LATVIA</option>
              <option value="LEBANON">LEBANON</option>
              <option value="LESOTHO">LESOTHO</option>
              <option value="LIBERIA">LIBERIA</option>
              <option value="LIBYA">LIBYA</option>
              <option value="LIECHTENSTEIN">LIECHTENSTEIN</option>
              <option value="LITHUANIA">LITHUANIA</option>
              <option value="LUXEMBOURG">LUXEMBOURG</option>
              <option value="MACAU">MACAU</option>
              <option value="MADAGASCAR">MADAGASCAR</option>
              <option value="MALAWI">MALAWI</option>
              <option value="MALAYSIA">MALAYSIA</option>
              <option value="MALDIVES">MALDIVES</option>
              <option value="MALI">MALI</option>
              <option value="MALTA">MALTA</option>
              <option value="MARTINIQUE">MARTINIQUE</option>
              <option value="MAURITANIA">MAURITANIA</option>
              <option value="MAURITIUS">MAURITIUS</option>
              <option value="MEXICO">MEXICO</option>
              <option value="MOLDOVA">MOLDOVA</option>
              <option value="MONACO">MONACO</option>
              <option value="MONGOLIA">MONGOLIA</option>
              <option value="MONTENEGRO">MONTENEGRO</option>
              <option value="MOROCCO">MOROCCO</option>
              <option value="MOZAMBIQUE">MOZAMBIQUE</option>
              <option value="MYANMAR">MYANMAR</option>
              <option value="NAMIBIA">NAMIBIA</option>
              <option value="NEPAL">NEPAL</option>
              <option value="NETHERLANDS">NETHERLANDS</option>
              <option value="NEW ZEALAND">NEW ZEALAND</option>
              <option value="NICARAGUA">NICARAGUA</option>
              <option value="NIGER">NIGER</option>
              <option value="NIGERIA">NIGERIA</option>
              <option value="NORTH MACEDONIA">NORTH MACEDONIA</option>
              <option value="NORWAY">NORWAY</option>
              <option value="OMAN">OMAN</option>
              <option value="PAKISTAN">PAKISTAN</option>
              <option value="PANAMA">PANAMA</option>
              <option value="PARAGUAY">PARAGUAY</option>
              <option value="PERU">PERU</option>
              <option value="PHILIPPINES">PHILIPPINES</option>
              <option value="POLAND">POLAND</option>
              <option value="PORTUGAL">PORTUGAL</option>
              <option value="PUERTO RICO">PUERTO RICO</option>
              <option value="QATAR">QATAR</option>
              <option value="ROMANIA">ROMANIA</option>
              <option value="RUSSIA">RUSSIA</option>
              <option value="RWANDA">RWANDA</option>
              <option value="SAUDI ARABIA">SAUDI ARABIA</option>
              <option value="SENEGAL">SENEGAL</option>
              <option value="SERBIA">SERBIA</option>
              <option value="SINGAPORE">SINGAPORE</option>
              <option value="SLOVAKIA">SLOVAKIA</option>
              <option value="SLOVENIA">SLOVENIA</option>
              <option value="SOMALIA">SOMALIA</option>
              <option value="SOUTH AFRICA">SOUTH AFRICA</option>
              <option value="SPAIN">SPAIN</option>
              <option value="SRI LANKA">SRI LANKA</option>
              <option value="SUDAN">SUDAN</option>
              <option value="SURINAME">SURINAME</option>
              <option value="SWEDEN">SWEDEN</option>
              <option value="SWITZERLAND">SWITZERLAND</option>
              <option value="SYRIA">SYRIA</option>
              <option value="TAIWAN">TAIWAN</option>
              <option value="TAJIKISTAN">TAJIKISTAN</option>
              <option value="TANZANIA">TANZANIA</option>
              <option value="THAILAND">THAILAND</option>
              <option value="TOGO">TOGO</option>
              <option value="TRINIDAD AND TOBAGO">TRINIDAD AND TOBAGO</option>
              <option value="TUNISIA">TUNISIA</option>
              <option value="TURKEY">TURKEY</option>
              <option value="TURKMENISTAN">TURKMENISTAN</option>
              <option value="UGANDA">UGANDA</option>
              <option value="UKRAINE">UKRAINE</option>
              <option value="UNITED ARAB EMIRATES">UNITED ARAB EMIRATES</option>
              <option value="UNITED STATES">UNITED STATES</option>
              <option value="URUGUAY">URUGUAY</option>
              <option value="UZBEKISTAN">UZBEKISTAN</option>
              <option value="VANUATU">VANUATU</option>
              <option value="VENEZUELA">VENEZUELA</option>
              <option value="VIETNAM">VIETNAM</option>
              <option value="YEMEN">YEMEN</option>
              <option value="ZAMBIA">ZAMBIA</option>
              <option value="ZIMBABWE">ZIMBABWE</option>
            </select>

            {/* <div className="flex gap-4 mb-5">
            <input
              placeholder="*First Name"
              className="flex-1 py-5 border border-gray-200 px-3 text-sm"
            />
            <input
              placeholder="*Last Name"
              className="flex-1 py-5 border border-gray-200 px-3 text-sm"
            />
          </div> */}

            <div className="relative mb-5">
              <input
                placeholder="*Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full py-5 border border-gray-200 px-3 text-sm"
              />
            </div>

            <input
              placeholder="*Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-5 border border-gray-200 px-3 mb-5 text-sm"
            />
            <input
              placeholder="*Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-5 border border-gray-200 px-3 mb-5 text-sm"
            />

            <label className="flex items-start gap-3 text-sm mb-2">
              <input type="checkbox" className="w-4 h-4 mt-1 cursor-pointer" />
              <span>
                I would like to receive latest news and information on this
                product.
              </span>
            </label>

            <label className="flex items-start gap-3 text-sm mb-6">
              <input
                onChange={(e) => setTermsAccepted(e.target.checked)}
                type="checkbox"
                className="w-4 h-4 mt-1 cursor-pointer"
              />
              <span>
                I have read and agree to the{" "}
                <a className="hover:underline opacity-65 hover:opacity-80 transition cursor-pointer">
                  terms of service
                </a>
                .
              </span>
            </label>

            <button
              disabled={!termsAccepted}
              className={`w-full py-4.5 bg-[#dc0a59] hover:bg-[#f40c63] text-white font-medium text-sm transition cursor-pointer ${
                !termsAccepted
                  ? "opacity-50 cursor-not-allowed hover:bg-[#dc0a59]"
                  : ""
              }`}
            >
              CREATE ACCOUNT
            </button>
          </div>

          <div className="w-1/2 hidden md:flex px-12 py-10 flex-col items-start text-left">
            <img
              src="https://web.archive.org/web/20180502132205im_/https://static-assets-prod.epicgames.com/fortnite/static/webpack/cb4399a7ee205610531057537937045e.png"
              alt="logo"
              className="w-11 mb-4"
            />
            <div className="uppercase font-bold text-sm mb-2">
              ALREADY HAVE An Epic Games ACCOUNT?
            </div>
            <p className="text-sm text-gray-600 mb-6 max-w-[400px]">
              Your Epic Games Account allows you to participate in our growing
              community of gamers and creators.
            </p>
            <Link className="w-full" to={"/sign-in"}>
              <button className="w-full py-4.5 border border-[#e61c64] text-[#e61c64] hover:bg-[#f40c63] hover:text-white transition ease-in-out duration-300 font-semibold text-sm cursor-pointer">
                SIGN IN
              </button>
            </Link>

            <div
              ref={turnstileRef}
              className="cf-turnstile mt-8 w-full"
              data-sitekey="0x4AAAAAABjGamk61Q5kosnf"
              data-callback="onTurnstileSuccess"
              data-error-callback="onTurnstileError"
              data-expired-callback="onTurnstileExpired"
              data-theme="light"
              data-size="flexible"
            ></div>
          </div>

          <div className="w-full md:hidden flex px-8 py-5 flex-col items-start text-left">
            <hr className="w-full bg-[#3d3c3c] mb-3.5" />
            <div className="uppercase font-bold text-sm mb-2">
              ALREADY HAVE An Epic Games ACCOUNT?
            </div>
            <p className="text-sm text-gray-600 mb-5 max-w-[400px]">
              Your Epic Games Account allows you to participate in our growing
              community of gamers and creators.
            </p>
            <Link className="w-full" to={"/sign-in"}>
              <button className="w-full py-4.5 border border-[#e61c64] text-[#e61c64] hover:bg-[#f40c63] hover:text-white transition ease-in-out duration-300 font-semibold text-sm cursor-pointer">
                SIGN IN
              </button>
            </Link>

            <div
              ref={turnstileRef}
              className="cf-turnstile mt-8 w-full"
              data-sitekey="0x4AAAAAABjGamk61Q5kosnf"
              data-callback="onTurnstileSuccess"
              data-error-callback="onTurnstileError"
              data-expired-callback="onTurnstileExpired"
              data-theme="light"
              data-size="flexible"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
