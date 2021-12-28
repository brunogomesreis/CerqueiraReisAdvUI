import * as React from "react";
import { ButtonGroup, Button, makeStyles, createStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import { FC } from "react";



type ButtonSwitchProps = {
  label?: string;
  onLabel?: string;
  offLabel?: string;
  onClick: (newValue: boolean) => void;
  value: boolean;
};

const ButtonSwitch: FC<ButtonSwitchProps> = ({
  label,
  onLabel,
  offLabel,
  onClick,
  value,
}) => {
  return (
    <div>
      <span>{label}</span>
      <ButtonGroup>
        <Button onClick={() => onClick(false)} disableElevation={!value}>
          {offLabel || "Não"}
        </Button>
        <Button onClick={() => onClick(true)} disableElevation={value}>
          {onLabel || "Sim"}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonSwitch;
