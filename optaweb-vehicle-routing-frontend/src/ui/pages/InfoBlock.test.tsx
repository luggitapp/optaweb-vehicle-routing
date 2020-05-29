/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PlusIcon } from '@patternfly/react-icons';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import { DistanceInfo, InfoBlock, VehiclesInfo, VisitsInfo } from 'ui/pages/InfoBlock';

describe('Info block snapshots:', () => {
  it('generic', () => {
    const infoBlock = shallow(<InfoBlock icon={PlusIcon} content="test content" />);
    expect(toJson(infoBlock)).toMatchSnapshot();
  });
  it('vehicles', () => {
    const vehiclesInfo = shallow(<VehiclesInfo />);
    expect(toJson(vehiclesInfo)).toMatchSnapshot();
  });
  it('visits', () => {
    const visitsInfo = shallow(<VisitsInfo visitCount={300} />);
    expect(toJson(visitsInfo)).toMatchSnapshot();
  });
  it('distance', () => {
    const distanceInfo = shallow(<DistanceInfo distance="3h 56m 11s" />);
    expect(toJson(distanceInfo)).toMatchSnapshot();
  });
});
