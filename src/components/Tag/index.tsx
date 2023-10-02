import { Chip } from '@mui/material';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
  selected: string | undefined;
  label: string | undefined;
  onSelect: () => void;
  onDelete: () => void;
  iconId: string;
  isDisabled: boolean;
}

export const Tag = ({ selected, label, onSelect, onDelete, iconId, isDisabled = false }: Props) => {
  const dictionaryIcon: { [key: string]: React.ElementType } = {
    ingredient: FavoriteIcon,
    category: LocalBarOutlinedIcon,
  };

  const Icon = dictionaryIcon[iconId || 'ingredient'];

  return (
    <Chip
      icon={selected ? <Icon /> : <></>}
      sx={{
        background: `radial-gradient(732px at 96.2% 89.9%, rgb(70, 66, 159, ${
          selected ? 1 : 0.3
        }) 0%, rgb(187, 43, 107, ${selected ? 1 : 0.5}) 92%)`,
        color: 'white',
        padding: '5px',
        '& .MuiChip-deleteIcon': { color: 'white' },
        '& .MuiChip-label': { fontWeight: 'bold' },
        '& .MuiChip-icon': { color: 'white' },
      }}
      label={label}
      onClick={onSelect}
      onDelete={selected ? onDelete : undefined}
      disabled={isDisabled}
    />
  );
};
