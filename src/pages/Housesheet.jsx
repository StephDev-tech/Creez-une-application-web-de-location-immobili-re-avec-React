import image from '../assets/logo_kasa.svg'
import data from '../assets/data.json'

const Housesheet = () => {
    return(
        <div className='housesheet'>
            <div className='housesheet-carrousel'>
                <i class="fa-solid fa-chevron-left"></i>
                <i className='fa-solid fa-chevron-right'></i>
            </div>
            <div className='housesheet-info'>
                <div className='housesheet-title'>
                <h2 className='title'>{data.title}</h2>
                <h3 className='subtitle'>sous-titre</h3>
                </div>
                <div>
                    <p className='profil-name'>Nom du profil</p>
                    <img src={image} alt="logo Kasa" className='profil-picture'/>
                </div>

            </div>
        </div>
    )
}

export default Housesheet