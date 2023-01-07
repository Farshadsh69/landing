import React from 'react'
import TopScreen from './TopScreen/index'
import useStyles from './indexStyles'
import OurClients from './ourClients/index'
import Courses from './courses/index'
import  CoursesFeatured from './CoursesFeatured'
import Footer from './footer/index'
import { Container } from '@mui/material'




export default function Index() {
    const classes=useStyles()
    return (
        <Container maxWidth='lg' className={classes.root}>
            <TopScreen />
            <OurClients />
            <Courses />
            <CoursesFeatured />
            <Footer />
        </Container>
    )
}
