// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Button from '@mui/material/Button';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ScatterPlotOutlinedIcon from '@mui/icons-material/ScatterPlotOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import Avatar from '@mui/material/Avatar';
import {
  AvatarSt,
  AvatarWrap,
  Card,
  CardHeader,
  CardInfo,
  Grade,
  GradeBox,
  ImgCardBox,
  Location,
  PriceBox,
  PropertiesList,
  PropertiesListItem,
} from './CardCamper.styled';
import { useEffect } from 'react';
import { capitalizeFirstLetter } from 'helpers/firstLetter';

const CardCamper = ({ advert }) => {
  const image = advert.gallery[0];
  useEffect(() => {
    console.log(advert);
    console.log(image);
  }, [advert]);
  return (
    <Card>
      <ImgCardBox>
        <img src={image} alt={advert.name} />
      </ImgCardBox>
      <div>
        <CardHeader>
          <h3>{advert.name}</h3>
          <PriceBox>
            <p>$ {advert.price.toFixed(2)}</p>
            <FavoriteBorderIcon />
          </PriceBox>
        </CardHeader>
        <GradeBox>
          <Grade>
            <GradeIcon />
            <p>{advert.raiting}</p>
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
            <ListItemText
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
            <ListItemText
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
            <ListItemText primary={capitalizeFirstLetter(advert.engine)} />
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
              <ListItemText primary="Kitchen" />
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
            <ListItemText primary={`${advert.details.beds} beds`} />
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
              <ListItemText primary="AC" />
            </PropertiesListItem>
          )}
        </PropertiesList>
        <Button variant="contained">Show more</Button>
      </div>
    </Card>
  );
};

export default CardCamper;
