import React from 'react';
import { Container, Typography, CardMedia } from '@mui/material';
import Grid2 from '@mui/material/Grid'; // If Grid v2 is stable and no longer under Unstable


const features = [
  {
    image: 'https://media.istockphoto.com/id/1320148440/photo/businessman-writing-growth-increasing-arrow-with-chart-and-graph-it-is-symbol-of-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=huccwJ-tcbL7E1exm0Hdj4iwnQia3iWz3J0I_VhG7PE=', // replace with your image
    title: 'Business Growth Strategies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  },
  {
    image: 'https://media.istockphoto.com/id/1934353498/photo/business-people-use-internet-technology-to-study-on-tablets-digital-marketing-concepts-create.webp?a=1&b=1&s=612x612&w=0&k=20&c=GFXODSZS35vgufV4wZi6z8G8PHHefEomvnvXGOjg6Cs=', // replace with your image
    title: 'Content Generation Guide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  },
  {
    image: 'https://media.istockphoto.com/id/1277278466/photo/style-blonde-in-90s-clothes-with-vr-glasses-and-headphones.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wdfjkhb0RHgr8ALfzZXJFGNdPjAxK8lotvtLpdyLGt8=', // replace with your image
    title: 'Realistic Results',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  }
];

const FeatureSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid2 container spacing={4}>
        {features.map((feature, index) => (
          <Grid2 container item xs={12} key={index} alignItems="center">
            {/* Image on left or right depending on the index */}
            {index % 2 === 0 ? (
              <>
                <Grid2 item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    image={feature.image}
                    alt={feature.title}
                    sx={{ borderRadius: '8px', width: '100%', height: 'auto' }}
                  />
                </Grid2>
                <Grid2 item xs={12} md={6}>
                  <Typography variant="h4" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">{feature.description}</Typography>
                </Grid2>
              </>
            ) : (
              <>
                <Grid2 item xs={12} md={6}>
                  <Typography variant="h4" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">{feature.description}</Typography>
                </Grid2>
                <Grid2 item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    image={feature.image}
                    alt={feature.title}
                    sx={{ borderRadius: '8px', width: '100%', height: 'auto' }}
                  />
                </Grid2>
              </>
            )}
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default FeatureSection;
