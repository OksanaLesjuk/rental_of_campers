import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import IconButton from '@mui/material/IconButton';
import ImageIcon from '@mui/icons-material/Image';

import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ScatterPlotOutlinedIcon from '@mui/icons-material/ScatterPlotOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import Avatar from '@mui/material/Avatar';
import {
  AvatarWrap,
  Card,
  CardBtn,
  CardHeader,
  CardInfo,
  CustomListText,
  Grade,
  GradeBox,
  ImgCardBox,
  Location,
  PriceBox,
  PropertiesList,
  PropertiesListItem,
} from './CardCamper.styled';
import { useContext, useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../helpers/firstLetter';
import { ModalContext } from '../../context/ModalContext/ModalContext';
import ShowMoreModal from '../ShowMoreModal/ShowMoreModal';
import { toggleFavorite } from '../../redux/advertsSlice';
import { useDispatch } from 'react-redux';

const CardCamper = ({ advert }) => {
  const [status, setStatus] = useState(advert.isFavorite);
  const { openModal } = useContext(ModalContext);

  const dispatch = useDispatch();

  useEffect(() => {
    setStatus(advert.isFavorite);
  }, [advert.isFavorite]);

  const image = advert.gallery[0];

  const handleShowMore = () => {
    openModal(
      <>
        <ShowMoreModal id={advert.id} />
      </>
    );
  };

  const toggleFavoriteBtn = async () => {
    await dispatch(toggleFavorite({ advert }));
    setStatus(prevStatus => !prevStatus);
  };
  return (
    <Card>
      <ImgCardBox>
        <img src={image} alt={advert.name} />
      </ImgCardBox>
      <div>
        <CardHeader>
          <h3>{advert.name}</h3>
          <PriceBox>
            <p> &euro;{advert.price.toFixed(2)}</p>
            <IconButton aria-label="favorite" onClick={toggleFavoriteBtn}>
              {status ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </PriceBox>
        </CardHeader>
        <GradeBox>
          <Grade>
            <GradeIcon />
            <p>
              {advert.rating}({advert.reviews.length} Reviews)
            </p>
          </Grade>
          <Location>
            <FmdGoodOutlinedIcon />
            <p>{advert.location}</p>
          </Location>
        </GradeBox>
        <CardInfo>{advert.description}</CardInfo>
        <PropertiesList>
          <PropertiesListItem>
            <AvatarWrap style={{ minWidth: '20px' }}>
              <Avatar
                style={{
                  background: 'transparent',
                  width: '20px',
                  height: '20px',
                }}
              >
                <GroupOutlinedIcon style={{ fill: '#101828' }} />
              </Avatar>
            </AvatarWrap>
            <CustomListText
              primary={`${advert.adults > 0 ? `${advert.adults} adults` : ''}${
                advert.children > 0 ? `, ${advert.children} children` : ''
              }`}
            />
          </PropertiesListItem>
          <PropertiesListItem>
            <AvatarWrap style={{ minWidth: '20px' }}>
              <Avatar
                style={{
                  background: 'transparent',
                  width: '20px',
                  height: '20px',
                }}
              >
                <ScatterPlotOutlinedIcon style={{ fill: '#101828' }} />
              </Avatar>
            </AvatarWrap>
            <CustomListText
              primary={capitalizeFirstLetter(advert.transmission)}
            />
          </PropertiesListItem>
          <PropertiesListItem>
            <AvatarWrap style={{ minWidth: '20px' }}>
              <Avatar
                style={{
                  background: 'transparent',
                  width: '20px',
                  height: '20px',
                }}
              >
                <ImageIcon style={{ fill: '#101828' }} />
              </Avatar>
            </AvatarWrap>
            <CustomListText primary={capitalizeFirstLetter(advert.engine)} />
          </PropertiesListItem>
          {advert.details.kitchen !== 0 && (
            <PropertiesListItem>
              <AvatarWrap style={{ minWidth: '20px' }}>
                <Avatar
                  style={{
                    background: 'transparent',
                    width: '20px',
                    height: '20px',
                  }}
                >
                  <RestaurantRoundedIcon style={{ fill: '#101828' }} />
                </Avatar>
              </AvatarWrap>
              <CustomListText primary="Kitchen" />
            </PropertiesListItem>
          )}
          <PropertiesListItem>
            <AvatarWrap style={{ minWidth: '20px' }}>
              <Avatar
                style={{
                  background: 'transparent',
                  width: '20px',
                  height: '20px',
                }}
              >
                <BedOutlinedIcon style={{ fill: '#101828' }} />
              </Avatar>
            </AvatarWrap>
            <CustomListText primary={`${advert.details.beds} beds`} />
          </PropertiesListItem>
          {advert.details.airConditioner !== 0 && (
            <PropertiesListItem>
              <AvatarWrap style={{ minWidth: '20px' }}>
                <Avatar
                  style={{
                    background: 'transparent',
                    width: '20px',
                    height: '20px',
                  }}
                >
                  <AirRoundedIcon style={{ fill: '#101828' }} />
                </Avatar>
              </AvatarWrap>
              <CustomListText primary="AC" />
            </PropertiesListItem>
          )}
        </PropertiesList>
        <CardBtn variant="contained" onClick={handleShowMore}>
          Show more
        </CardBtn>
      </div>
    </Card>
  );
};

export default CardCamper;
