import StarRatings from 'react-star-ratings';

const RatingStars = ({ rating }) => {
  //   // Обробник зміни рейтингу
  //   const changeRating = newRating => {
  //     console.log(newRating);
  //     // Додати вашу логіку для обробки зміни рейтингу
  //   };

  return (
    <StarRatings
      rating={rating}
      starDimension="16px" // Розмір зірок
      starSpacing="4px" // Відступи між зірками
      starRatedColor="#FFC531" // Колір вибраних зірок
      starEmptyColor="#F2F4F7" // Колір порожніх зірок
      //   changeRating={changeRating}
      numberOfStars={5} // Кількість зірок
      name="rating"
    />
  );
};

export default RatingStars;
