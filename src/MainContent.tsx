import 'date-fns';
import React from "react";
import { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';

import {
  TextField,
} from '@material-ui/core';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

// Material-UIアイコン取得

// スタイルを適用する
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        flexGrow: 1,
        margin: theme.spacing(1),
        width: '25ch',
      }
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(3),
      }
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    datepicker: {
      margin: '10px',
    }
  }),
);

function MainContent() {

  // CSSを適用する。
  const classes = useStyles();

  const [firstDate, setFirstDate] = useState<Date | null>(
    new Date('2020-05-14T21:11:54'),
  );
  const [lastDate, setLastDate] = useState<Date | null>(
    new Date('2020-05-15T21:11:54'),
  )

  const handleFirstDateChange = (date: Date | null) => {
    setFirstDate(date);
  };
  const handleLastDateChange = (date: Date | null) => {
    setLastDate(date);
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="freetext" label="freetext" variant="outlined" />
        <TextField id="snsId" label="SNSのID" variant="outlined" />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          className={classes.datepicker}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="search_first_day"
          label="検索開始日"
          value={firstDate}
          onChange={handleFirstDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
          <KeyboardDatePicker
          className={classes.datepicker}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="search_last_day"
          label="検索終了日"
          value={lastDate}
          onChange={handleLastDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      </form>
    </>
  );
}

export default MainContent