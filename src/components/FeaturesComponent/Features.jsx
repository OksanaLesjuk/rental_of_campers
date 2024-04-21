import React, { useEffect } from 'react';
import {
  Characteristics,
  FeatureBox,
  LiWrapBottom,
} from './FeaturesComponent.styled';

const Features = ({ advert }) => {
  const getIcon = characteristic => {
    // Об'єкт з відповідностями характеристик та їх іконок
    const icons = {
      airConditioner: 'air_conditioner_icon',
      bathroom: 'bathroom_icon',
      kitchen: 'kitchen_icon',
      beds: 'beds_icon',
      TV: 'TV_icon',
      engine: 'engine_icon',
      transmission: 'transmission_icon',
    };
    // Повертаємо іконку відповідно до характеристики
    return icons[characteristic] || 'not_available_icon';
  };
  useEffect(() => {
    console.log(advert);
  });
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

  return (
    <FeatureBox>
      <Characteristics>
        {characteristicArray.map((item, index) => (
          <div key={index}>
            <img src={`/${item.icon}.png`} alt={item.characteristic} />
            <p>
              {item.characteristic}: {item.value}
            </p>
          </div>
        ))}
      </Characteristics>
      <h4>Vehicle details</h4>
      <ul>
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
      </ul>
    </FeatureBox>
  );
};

export default Features;
