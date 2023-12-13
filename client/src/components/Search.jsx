import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import comingSoon from '../pics/ComingSoon.png';

export default function CheckboxesTags({ selectedTheme }) {
  const [selectedColors, setSelectedColors] = React.useState([]);
  const [selectedRarity, setSelectedRarity] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState('');
  const [cardType, setCardType] = React.useState('');
  const [cardSubtype, setCardSubtype] = React.useState('');
  const [cardArtist, setCardArtist] = React.useState('');
  const [convertedManaCost, setConvertedManaCost] = React.useState('');
  const [colorOptions, setColorOptions] = React.useState([]);
  const [rarityOptions, setRarityOptions] = React.useState([]);
  const [selectedCardImages, setSelectedCardImages] = React.useState([]);
  const [searchMenuOpen, setSearchMenuOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    // Fetch colors and rarities when the component mounts
    fetchColors();
    fetchRarities();
  }, []);

  const fetchColors = async () => {
    // Fetch colors from the API or any data source
    const colors = ['White', 'Blue', 'Black', 'Red', 'Green'];
    setColorOptions(colors);
  };

  const fetchRarities = async () => {
    // Fetch rarities from the API or any data source
    const rarities = ['Common', 'Uncommon', 'Rare', 'Mythic'];
    setRarityOptions(rarities);
  };

  const handleSearchButtonClick = () => {
    setSearchMenuOpen(!searchMenuOpen);
  };

  const handleMenuClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddToCollection = (cardId) => {
    // Add logic to handle adding the card to the collection/database
    console.log(`Adding card with ID ${cardId} to collection`);
    handleMenuClose();
  };

  const handleMenuItemClick = (option) => {
    console.log(`Selected option: ${option}`);
    // Add logic to handle the selected menu item (e.g., Add to Deck or Add to Collection)
    handleMenuClose();
  };

  const isMenuOpen = Boolean(anchorEl);

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleMenuItemClick('Add to Deck')}>Add to Deck</MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('Add to Collection')}>Add to Collection</MenuItem>
    </Menu>
  );

  const fetchCardData = async () => {
    try {
      const colorQuery = selectedColors.length > 0 ? `&colors=${selectedColors.join(',')}` : '';
      const rarityQuery = selectedRarity ? `&rarity=${selectedRarity}` : '';
      const typeQuery = cardType ? `&type=${cardType}` : '';
      const subtypeQuery = cardSubtype ? `&subtype=${cardSubtype}` : '';
      const artistQuery = cardArtist ? `&artist=${cardArtist}` : '';
      const convertedManaCostQuery = convertedManaCost ? `&cmc=${convertedManaCost}` : '';

      const response = await fetch(
        `https://api.magicthegathering.io/v1/cards?name=${searchInput}${colorQuery}${rarityQuery}${typeQuery}${subtypeQuery}${artistQuery}${convertedManaCostQuery}`
      );

      const data = await response.json();
      // Store only the image URLs of the matching cards, or use a placeholder if no image is available
      const cardImages = data.cards.map((card) => card.imageUrl || comingSoon);
      setSelectedCardImages(cardImages);

      // Collapse the search menu after performing a search
      setSearchMenuOpen(false);
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ backgroundColor: '#add8e6', padding: '20px', borderRadius: '10px', width: searchMenuOpen ? '30%' : '100%', height: searchMenuOpen ? "460px" : "55px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearchButtonClick}
        >
          {searchMenuOpen ? 'Hide Search' : 'Show Search'}
        </Button>
        <Collapse in={searchMenuOpen} timeout={0} unmountOnExit>
          <div>
            <TextField
              label="Search for Card Names"
              variant="outlined"
              fullWidth
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Autocomplete
              multiple
              id="checkboxes-colors"
              options={colorOptions}
              disableCloseOnSelect
              getOptionLabel={(color) => color}
              value={selectedColors}
              onChange={(event, newValue) => setSelectedColors(newValue)}
              sx={{
                width: {
                  xs: 100,
                  sm: 200,
                  md: 250,
                  lg: 300,
                  xl: 400,
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Colors"
                  variant="outlined"
                />
              )}
            />
            <Autocomplete
              id="checkboxes-rarity"
              options={rarityOptions}
              getOptionLabel={(rarity) => rarity}
              value={selectedRarity}
              onChange={(event, newValue) => setSelectedRarity(newValue)}
              sx={{
                width: {
                  xs: 100,
                  sm: 200,
                  md: 250,
                  lg: 300,
                  xl: 400,
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Rarity"
                  variant="outlined"
                />
              )}
            />
            <TextField
              label="Card Type"
              variant="outlined"
              fullWidth
              onChange={(e) => setCardType(e.target.value)}
            />
            <TextField
              label="Card Subtype"
              variant="outlined"
              fullWidth
              onChange={(e) => setCardSubtype(e.target.value)}
            />
            <TextField
              label="Card Artist"
              variant="outlined"
              fullWidth
              onChange={(e) => setCardArtist(e.target.value)}
            />
            <TextField
              label="Converted Mana Cost"
              variant="outlined"
              fullWidth
              onChange={(e) => setConvertedManaCost(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={fetchCardData}
            >
              Search
            </Button>
          </div>
        </Collapse>
      </div>
      {selectedCardImages.length > 0 && (
        <div style={{ backgroundColor: '#f0f0f0', margin: '10px', padding: '4px', borderRadius: '10px', marginTop: '20px' }}>
          {/* Display card images in rows of three */}
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            {selectedCardImages.map((imageUrl, index) => (
              <div key={index} style={{ position: 'relative', marginRight: '20px', marginBottom: '20px', flexBasis: 'calc(33.33% - 20px)' }}>
                <img
                  src={imageUrl}
                  alt={`Card ${index + 1}`}
                  style={{ maxWidth: '100%', height: '400px' }}
                />
                <button
                  onClick={handleMenuClick}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: selectedTheme.colors.addButton,// Change the button color to lime green
                    border: 'none',
                    cursor: 'pointer',
                    padding: '5px',
                    borderRadius: '50%',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    width="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </button>
                {renderMenu}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}