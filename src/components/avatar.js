import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avatarss from '../components/assets/avatarss.png';
export default function ImageAvatars() {
  return (
    <Stack  >
      <Avatar alt="" style={{marginLeft:'4pc'}} src={avatarss}>
        David
      </Avatar>
    </Stack>
  );
}