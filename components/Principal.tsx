'use client'
import React from "react";
import Card from "./Card";
import styles from "@/Styles/Principal.module.scss"

const Principal: React.FC = () => {


    return (
        <div className={styles.container}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Principal;