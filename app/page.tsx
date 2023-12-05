"use client";

import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
  Metric,
  Flex,
  ProgressBar
} from "@tremor/react";
import {Button} from '@nextui-org/button';

export default function DashboardExample() {
  return (
    <main className="p-12">
      {/* <Button>click</Button> */}
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28">
                  <Text>Learning Points</Text>
                  <Metric> 5423 pts</Metric>
                  <Flex className="mt-4">
                    <Text>32% of average </Text>
                    <Text> 225 pts</Text>
                  </Flex>
                  <ProgressBar value={32} className="mt-2" />
                </div>
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <div className="h-80" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
