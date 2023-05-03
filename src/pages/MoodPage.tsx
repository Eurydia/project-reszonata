import { Box, Button, Stack, Typography } from "@mui/material";
import {
  amber,
  blue,
  blueGrey,
  deepOrange,
  green,
  grey,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  yellow,
} from "@mui/material/colors";
import { FC } from "react";

type MoodItemProps = {
  title: string;
  colorA: string;
  colorB: string;
};

const MoodItem: FC<MoodItemProps> = (props) => {
  const { title, colorA, colorB } = props;

  return (
    <Button
      fullWidth
      sx={{
        backgroundImage: `linear-gradient(to bottom right, ${colorA}, ${colorB})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "5rem",
      }}
    >
      <Typography fontWeight="bold" color="white">
        {title}
      </Typography>
    </Button>
  );
};

export const MoodPage: FC = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <MoodItem
          title="Happy"
          colorA={yellow[300]}
          colorB={pink[400]}
        />
        <MoodItem
          title="Nostalgic"
          colorA={amber[700]}
          colorB={yellow[300]}
        />
        <MoodItem
          title="Energetic"
          colorA={lightBlue[400]}
          colorB={lime[300]}
        />
        <MoodItem
          title="Stellar"
          colorA={purple[300]}
          colorB={amber[400]}
        />
        <MoodItem
          title="Serene"
          colorA={lightBlue[500]}
          colorB={grey[200]}
        />
        <MoodItem
          title="Dramatic"
          colorA={deepOrange[200]}
          colorB={purple[600]}
        />
        <MoodItem
          title="Melancholic"
          colorA={blueGrey[200]}
          colorB={grey[700]}
        />
      </Stack>
    </Box>
  );
};
