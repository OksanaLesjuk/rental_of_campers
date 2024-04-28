// import { useEffect } from 'react';
import {
  Characteristic,
  Characteristics,
  FeatureBox,
  LiWrapBottom,
  SvgFeatures,
  TitleDetails,
  UlDetails,
} from './FeaturesComponent.styled';
import iconsSprite from '../../images/icons_sprite.svg';

const Features = ({ advert }) => {
  const getIcon = characteristic => {
    // Об'єкт з відповідностями характеристик та їх іконок
    const icons = {
      airConditioner: `${iconsSprite}#icon-air_conditioner`,
      // bathroom: 'bathroom_icon',
      // kitchen: 'kitchen_icon',
      // beds: 'beds_icon',
      // TV: 'TV_icon',
      // engine: 'engine_icon',
      // transmission: 'transmission_icon',
    };
    // Повертаємо іконку відповідно до характеристики
    console.log(icons[characteristic]);
    return icons[characteristic] || 'not_available_icon';
  };

  // Створення масиву об'єктів з властивістю, значенням та іконкою
  const characteristicArray = Object.entries(advert.details).map(
    ([characteristic, value]) => ({
      characteristic,
      value,
      icon: getIcon(characteristic), // Отримання іконки
    })
  );

  characteristicArray.push(
    { characteristic: 'engine', value: advert.engine, icon: getIcon('engine') },
    {
      characteristic: 'transmission',
      value: advert.transmission,
      icon: getIcon('transmission'),
    }
  );

  // useEffect(() => {
  //   console.log(advert);
  //   console.log(characteristicArray);
  // }, [characteristicArray]);

  return (
    <FeatureBox>
      <Characteristics>
        {characteristicArray.map(
          (item, index) =>
            item.value !== 0 && ( // Перевірка, чи значення не дорівнює 0
              <Characteristic key={index}>
                <SvgFeatures>
                  <use href={`#${item.icon}`} width="20" height="20" />
                </SvgFeatures>
                <p>
                  {item.value} {item.characteristic}
                </p>
              </Characteristic>
            )
        )}
      </Characteristics>
      <TitleDetails>Vehicle details</TitleDetails>
      <UlDetails>
        <LiWrapBottom>
          <p>Form</p>
          <p>{advert.form}</p>
        </LiWrapBottom>
        <LiWrapBottom>
          <p>Length</p>
          <p>{advert.length}</p>
        </LiWrapBottom>
        <LiWrapBottom>
          <p>Width</p>
          <p>{advert.width}</p>
        </LiWrapBottom>
        <LiWrapBottom>
          <p>Height</p>
          <p>{advert.height}</p>
        </LiWrapBottom>
        <LiWrapBottom>
          <p>Tank</p>
          <p>{advert.tank}</p>
        </LiWrapBottom>
        <LiWrapBottom>
          <p>Consumption</p>
          <p>{advert.consumption}</p>
        </LiWrapBottom>
      </UlDetails>
    </FeatureBox>
  );
};

export default Features;
