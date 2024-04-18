// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Button from '@mui/material/Button';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ScatterPlotOutlinedIcon from '@mui/icons-material/ScatterPlotOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import {
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

const CardCamper = () => {
  return (
    <Card>
      <ImgCardBox>
        <img src="" alt="" />
      </ImgCardBox>
      <div>
        <CardHeader>
          <h3>Furgon</h3>
          <PriceBox>
            <p>$ 5000.00</p>
            <FavoriteBorderIcon />
          </PriceBox>
        </CardHeader>
        <GradeBox>
          <Grade>
            <GradeIcon />
            <p>raiting</p>
          </Grade>
          <Location>
            <FmdGoodOutlinedIcon />
            <p>Stryi, Ukraine</p>
          </Location>
        </GradeBox>
        <CardInfo>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          laboriosam blanditiis illo dolorum assumenda, numquam suscipit vitae
          tempore ipsum repellat a modi facere quam quasi. Distinctio inventore
          quae alias eaque.
        </CardInfo>
        <PropertiesList>
          <PropertiesListItem>
            <ListItemAvatar>
              <AvatarWrap>
                <GroupOutlinedIcon />
              </AvatarWrap>
            </ListItemAvatar>
            <ListItemText primary="2 adults" />
          </PropertiesListItem>
          <PropertiesListItem>
            <ListItemAvatar>
              <AvatarWrap>
                <ScatterPlotOutlinedIcon />
              </AvatarWrap>
            </ListItemAvatar>
            <ListItemText primary="Automatic" />
          </PropertiesListItem>
          <PropertiesListItem>
            <ListItemAvatar>
              <AvatarWrap>
                <ImageIcon />
              </AvatarWrap>
            </ListItemAvatar>
            <ListItemText primary="petrol" />
          </PropertiesListItem>
          <PropertiesListItem>
            <ListItemAvatar>
              <AvatarWrap>
                <RestaurantRoundedIcon />
              </AvatarWrap>
            </ListItemAvatar>
            <ListItemText primary="Kitchen" />
          </PropertiesListItem>
          <PropertiesListItem>
            <ListItemAvatar>
              <AvatarWrap>
                <BedOutlinedIcon />
              </AvatarWrap>
            </ListItemAvatar>
            <ListItemText primary="1 beds" />
          </PropertiesListItem>
          <PropertiesListItem>
            <ListItemAvatar>
              <AvatarWrap>
                <AirRoundedIcon />
              </AvatarWrap>
            </ListItemAvatar>
            <ListItemText primary="AC" />
          </PropertiesListItem>
        </PropertiesList>
        <Button variant="contained">Show more</Button>
      </div>
    </Card>
  );
};

export default CardCamper;
