import { forwardRef, memo } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

// Spinner for loading
export const DogSpinner = memo(() => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
));
DogSpinner.displayName = 'DogSpinner';

// Container component for the 3D model with forwarded ref
export const DogContainer = forwardRef(({ children, ...rest }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-20px', '-60px', '0px']}
    mb={['-40px', '-140px', '0px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
    {...rest} // Forward any additional props to the Box component
  >
    {children}
  </Box>
));
DogContainer.displayName = 'DogContainer';

// Loader component combining DogContainer and DogSpinner
const Loader = memo(() => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
});
Loader.displayName = 'Loader';

export default Loader;
