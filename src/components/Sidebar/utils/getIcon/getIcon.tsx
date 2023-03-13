import React from 'react';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import FolderSharpIcon from '@mui/icons-material/FolderSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';

export const getIcon = (tabId: string) => {
  switch (tabId) {
    case '/upload': {
      return <FileUploadSharpIcon fontSize="large" />;
    }
    case '/files': {
      return <FolderSharpIcon fontSize="large" />;
    }
    case '/people': {
      return <PeopleAltSharpIcon fontSize="large" />;
    }
    case '/auth': {
      return <ExitToAppSharpIcon fontSize="large" />;
    }
    default: {
      return null;
    }
  }
};
