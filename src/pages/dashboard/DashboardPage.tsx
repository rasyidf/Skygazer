import React from 'react';
import { Container, Paper, Text, Col, Grid, SimpleGrid } from '@mantine/core';
import { FeaturedObject } from './FeaturedObject';
import { GetInvolved } from './GetInvolved';
import { LatestAstronomyNews } from './LatestAstronomyNews';
import { TelescopeSettings } from './TelescopeSettings';
import { UpcomingEvents } from './UpcomingEvents';

export function DashboardPage() {
    return (
        <Container p="lg" fluid>
            <Paper>
                <Text align="center" size="xl">Welcome to the Astronomy Dashboard</Text>;

            </Paper>
            <SimpleGrid>

                <FeaturedObject />
                <UpcomingEvents />
                <TelescopeSettings />
                <LatestAstronomyNews />
                <GetInvolved />
            </SimpleGrid>
        </Container>
    );
}
