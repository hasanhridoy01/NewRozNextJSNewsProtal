import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

function Media(props) {
  const { loading = false, images, texts } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : images).map((image, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {image ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={texts[index]?.title || ''}
              src={image}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {texts[index] ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {texts[index].title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {texts[index].channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${texts[index].views} • ${texts[index].createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.string),
  texts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      channel: PropTypes.string,
      views: PropTypes.string,
      createdAt: PropTypes.string,
    })
  ),
};

export default function Loading() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading images={[]} texts={[]} />
    </Box>
  );
}