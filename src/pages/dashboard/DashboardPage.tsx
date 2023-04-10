import React from 'react';
import { Container, Paper, Text, Col, Grid } from '@mantine/core';
import { FeaturedObject } from './FeaturedObject';
import { GetInvolved } from './GetInvolved';
import { LatestAstronomyNews } from './LatestAstronomyNews';
import { TelescopeSettings } from './TelescopeSettings';
import { UpcomingEvents } from './UpcomingEvents';

export function DashboardPage() {
    return (
        <Container>
            <Paper p="md" shadow="xs">
                <Text align="center" size="xl">Welcome Message</Text>
            </Paper>
            <Grid>

                <Grid.Col><FeaturedObject /></Grid.Col>
                <Grid.Col><UpcomingEvents /></Grid.Col>
                <Grid.Col><TelescopeSettings /></Grid.Col>
                <Grid.Col><LatestAstronomyNews /></Grid.Col>
                <Grid.Col><GetInvolved /></Grid.Col>
            </Grid>
        </Container>
    );
}
