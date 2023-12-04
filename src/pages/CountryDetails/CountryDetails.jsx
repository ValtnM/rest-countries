import './CountryDetails.css';

export default function CountryDetails() {
  return (
    <section>
        <div className="backBtn">
            <p>Back</p>
        </div>
        <div className="country">
            <img src="https://cdn.pixabay.com/photo/2012/04/11/15/19/france-28463_1280.png" alt="" />
            <div className="infos">
                <h2>France</h2>
                <div className="details">
                    <div>
                        <p><strong>Native Name: </strong> French</p>
                        <p><strong>Population: </strong> 70.000.000</p>
                        <p><strong>Region: </strong> Europe</p>
                        <p><strong>Sub Region: </strong> Western Europe</p>
                        <p><strong>Capital: </strong> Paris</p>
                    </div>
                    <div>
                        <p><strong>Top Level Domain: </strong> .fr</p>
                        <p><strong>Currencies: </strong> Euro</p>
                        <p><strong>Languages: </strong> French</p>
                    </div>
                </div>
                <div className="neighbours">
                    <p><strong>Border Countries: </strong></p>
                    <button>Belgium</button>
                    <button>Germany</button>
                    <button>Netherlands</button>
                </div>
            </div>
        </div>
    </section>
  )
}
