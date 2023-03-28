// SPDX-License-Identifier: ice License 1.0

import {ReferralType} from '@api/user/types';
import {ActiveUsers} from '@screens/Team/components/TierList/components/Header/components/ActiveUsers';
import {WalkthroughElementContainer} from '@screens/Walkthrough/components/WalkthroughElementContainer';
import {useSetWalkthroughElementData} from '@store/modules/Walkthrough/hooks/useSetWalkthroughElementData';
import {useEffect, useRef} from 'react';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {rem} from 'rn-units';

const WALKTHROUGH_ELEMENT_CONTAINER_PADDING = rem(20);

export const useActiveUsersWalkthrough = ({
  referralType,
  focused,
}: {
  referralType: ReferralType;
  focused: boolean;
}) => {
  const elementRef = useRef<View>(null);

  const {setWalkthroughElementData} = useSetWalkthroughElementData();

  useEffect(() => {
    if (focused && referralType === 'T1') {
      setWalkthroughElementData({
        stepKey: 'activeUsers',
        elementData: {
          getRef: () => elementRef,
          getTop: measurements => {
            return (
              measurements.pageY - WALKTHROUGH_ELEMENT_CONTAINER_PADDING * 2
            );
          },
          render: ({measurements}) => {
            const left =
              measurements.pageX - WALKTHROUGH_ELEMENT_CONTAINER_PADDING * 2;
            return (
              <WalkthroughElementContainer
                outerStyle={[styles.outerContainer, {left}]}
                innerStyle={styles.innerContainer}>
                <ActiveUsers referralType={referralType} />
              </WalkthroughElementContainer>
            );
          },
        },
      });
    }
  }, [focused, referralType, setWalkthroughElementData]);

  return {
    elementRef,
  };
};

const styles = StyleSheet.create({
  outerContainer: {
    alignSelf: 'flex-start',
    padding: WALKTHROUGH_ELEMENT_CONTAINER_PADDING,
    justifyContent: 'center',
  },
  innerContainer: {
    padding: WALKTHROUGH_ELEMENT_CONTAINER_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
  },
});