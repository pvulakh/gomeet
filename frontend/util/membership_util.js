export const createMembership = groupId => {
  return $.ajax({
    method: 'POST',
    url: `api/groups/${groupId}/memberships` 
  });
};

export const deleteMembership = groupId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/groups/${groupId}/memberships/`
  });
};
