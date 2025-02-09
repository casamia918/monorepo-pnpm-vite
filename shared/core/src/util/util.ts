import { isBlank, isEmpty } from '@gerp/ui/utils';

export function isBlankOrEmpty(data: any) {
  return isBlank(data) || isEmpty(data);
}
