// SPDX-License-Identifier: ice License 1.0

import {COLORS} from '@constants/colors';
import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

export const ManIcon = (props: SvgProps) => {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" {...props}>
      <Path
        d="M7.19837 1C6.98354 1.04096 6.76596 1.07104 6.55432 1.12461C5.04251 1.50732 3.91031 2.83816 3.7668 4.39405C3.59129 6.29692 4.82999 8.00594 6.69983 8.4222C6.9771 8.47959 7.25948 8.50865 7.54262 8.50894C8.62487 8.52464 9.68191 8.67136 10.6945 9.07042C11.268 9.29646 11.8061 9.58661 12.2745 9.9923C12.742 10.3972 12.9758 10.9141 12.9841 11.5315C12.9882 11.836 12.9861 12.1407 12.9844 12.4452C12.9827 12.7646 12.7701 12.979 12.4507 12.9791C9.15156 12.9798 5.85237 12.9798 2.55319 12.979C2.23993 12.979 2.02099 12.7655 2.02241 12.4558C2.02426 12.0543 2.0125 11.6509 2.04879 11.2521C2.09384 10.7571 2.333 10.3457 2.70415 10.0155C3.08333 9.67816 3.51661 9.42589 3.97681 9.21594C4.24127 9.09529 4.35711 8.84927 4.27989 8.59396C4.19844 8.32463 3.9058 8.15119 3.64811 8.26153C2.81489 8.61828 2.04807 9.07557 1.52013 9.84265C1.18838 10.323 1.01005 10.8926 1.00864 11.4764C1.00403 11.8819 0.982443 12.2921 1.03192 12.6923C1.12639 13.4566 1.76951 13.9933 2.54123 13.9941C4.4869 13.9961 6.43257 13.9963 8.37824 13.9948C9.71061 13.9948 11.0432 13.9807 12.3753 13.9998C13.2414 14.0122 13.8817 13.4079 13.9812 12.7066C13.9828 12.6954 13.9935 12.6855 14 12.675V11.2537C13.9907 11.2307 13.9835 11.2069 13.9784 11.1827C13.8786 10.3684 13.5099 9.70044 12.8823 9.17542C12.1883 8.59474 11.393 8.20276 10.5344 7.93304C10.2988 7.859 10.0588 7.79878 9.82031 7.73209C9.82458 7.71822 9.82469 7.70846 9.82963 7.70359C9.84462 7.68879 9.86154 7.67597 9.87758 7.66222C10.8859 6.79852 11.3507 5.70638 11.2366 4.38099C11.1072 2.8784 10.0026 1.55472 8.54892 1.15266C8.30626 1.08554 8.05484 1.05009 7.80747 1L7.19837 1ZM7.50688 7.49727C6.77977 7.49701 6.08245 7.20834 5.56788 6.69459C5.05332 6.18085 4.76353 5.48396 4.76208 4.75682C4.7617 3.25011 5.98728 2.01969 7.49278 2.01533C9.00567 2.01094 10.2408 3.2383 10.2438 4.74906C10.2468 6.26133 9.01774 7.49544 7.50688 7.49727Z"
        fill={props.color ?? COLORS.secondaryLight}
        stroke={props.color ?? COLORS.secondaryLight}
        strokeWidth="0.2"
      />
    </Svg>
  );
};