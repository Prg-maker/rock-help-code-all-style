import { CircleWavyCheck, Clock, Hourglass } from "phosphor-react-native";
import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import theme from "../../styles/theme";

import { styles } from "./styles";

interface OrderProps {
  patrimony: number;
  date: string;
  status: "inProgress" | "Finished";
  hours: string;
}

export function Order(props: OrderProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={[
          styles.bar,
          props.status == "inProgress"
            ? {
                backgroundColor: theme.colors.secondary,
              }
            : {
                backgroundColor: theme.colors.green[300],
              },
        ]}
      />

      <View style={styles.content}>
        <Text style={styles.pratrimonio}>Patrimônio {props.patrimony}</Text>

        <View style={styles.date}>
          <Clock size={18} weight="light" color={theme.colors.gray[300]} />
          <Text style={styles.dateText}>
            {props.date} às {props.hours}h
          </Text>
        </View>
      </View>

      <View style={styles.icon}>
        {props.status == "inProgress" ? (
          <Hourglass size={32} weight="regular" color={theme.colors.secondary}/>
        ) : (
          <CircleWavyCheck size={32} color={theme.colors.green[300]} />
        )}
      </View>
    </TouchableOpacity>
  );
}
