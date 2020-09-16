import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { getRandomColor } from "./utils/color";
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';

// Get Random Color
const randCol = getRandomColor();

// Set List Color for filter
const listCol: string[] = [];
randCol.map((color, i) => (
  listCol.push(color[0].name)
));

// Custom Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, colFil: string[], theme: Theme) {
  return {
    fontWeight:
      colFil.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [randColor] = useState(randCol);
  const [lum, setLum] = useState<string>('');
  const [colFil, setColFil] = useState<string[]>([]);
  console.log(randColor);
  return (
    <div>
      <form className='row'>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">Color Filter</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={colFil}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setColFil(event.target.value as string[]);
            }}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {(selected as string[]).map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {listCol.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, colFil, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-select-native">Luminence</InputLabel>
          <Select
            native
            value={lum}
            onChange={(event: ChangeEvent<{ value: unknown }>) => {
              setLum(event.target.value as string);
            }}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            <option aria-label="All" value="" />
            <option value="darken">Darken</option>
            <option value="lighten">Lighten</option>
          </Select>
        </FormControl>
      </form>
      <div className='column'>
        {randColor.map((color, i) => {
          if (colFil.length < 1) {
            return (
              <div className='row' key={i}>
                {color.map((col, j) => {
                  if (lum === '') {
                    return (
                      <div className="box" key={i + '|' + j}>
                        <div className="box-fill" style={{ backgroundColor: JSON.parse(JSON.stringify(col)).hex }}></div>
                      </div>
                    )
                  } else if ((JSON.parse(JSON.stringify(col)).name !== 'darken' && JSON.parse(JSON.stringify(col)).name !== 'lighten') || JSON.parse(JSON.stringify(col)).name === lum) {
                    return (
                      <div className="box" key={i + '|' + j}>
                        <div className="box-fill" style={{ backgroundColor: JSON.parse(JSON.stringify(col)).hex }}></div>
                      </div>
                    )
                  }
                })}
              </div>
            )
          } else if (colFil.includes(color[0].name)) {
            return (
              <div className='row' key={i}>
                {color.map((col, j) => {
                  if (lum === '') {
                    return (
                      <div className="box" key={i + '|' + j}>
                        <div className="box-fill" style={{ backgroundColor: JSON.parse(JSON.stringify(col)).hex }}></div>
                      </div>
                    )
                  } else if ((JSON.parse(JSON.stringify(col)).name !== 'darken' && JSON.parse(JSON.stringify(col)).name !== 'lighten') || JSON.parse(JSON.stringify(col)).name === lum) {
                    return (
                      <div className="box" key={i + '|' + j}>
                        <div className="box-fill" style={{ backgroundColor: JSON.parse(JSON.stringify(col)).hex }}></div>
                      </div>
                    )
                  }
                })}
              </div>
            )
          }
        })}
      </div>
    </div >
  )
}
export default Index;
