from django.db import models
from users.models import Profile
from core.models import BaseModel

# Create your models here.


class Workspace(BaseModel):
  """Model definition for Workspace."""

  # TODO: Define fields here
  name = models.CharField('Name', max_length=256)
  colaborators = models.ManyToManyField(Profile, blank=True)

  class Meta:
    """Meta definition for Workspace."""

    verbose_name = 'Workspace'
    verbose_name_plural = 'Workspaces'

  def __str__(self):
    """Unicode representation of Workspace."""
    return '%s' % (self.name)

  # def save(self):
  #   """Save method for Workspace."""
  #   pass

  # def get_absolute_url(self):
  #   """Return absolute url for Workspace."""
  #   return ('')

  # TODO: Define custom methods here

class StyleWorkspace(models.Model):
  """Model definition for StyleWorkspace."""

  # TODO: Define fields here
  workspace = models.OneToOneField(Workspace, on_delete=models.CASCADE, related_name='style')
  bg_image = models.ImageField(upload_to='workspaces/background', blank=True, null=True)
  bg_color = models.CharField(max_length=500, blank=True, null=True)

  class Meta:
    """Meta definition for StyleWorkspace."""

    verbose_name = 'StyleWorkspace'
    verbose_name_plural = 'StyleWorkspaces'

  def __str__(self):
    """Unicode representation of StyleWorkspace."""
    return '%s' % (self.workspace)

  # def save(self):
  #   """Save method for StyleWorkspace."""
  #   pass

  # def get_absolute_url(self):
  #   """Return absolute url for StyleWorkspace."""
  #   return ('')

  # TODO: Define custom methods here


class Todo(BaseModel):
  """Model definition for Todo."""
  workspace = models.ForeignKey(Workspace, on_delete=models.CASCADE, related_name='task')
  title = models.CharField(max_length=256)
  description = models.TextField('Description', blank=True, null=True)
  state = models.PositiveSmallIntegerField(default=0)
  asigned = models.ManyToManyField(Profile, blank=True)
  image = models.ImageField(upload_to='workspaces/todos/image', blank=True, null=True)

  # TODO: Define fields here

  class Meta:
    """Meta definition for Todo."""

    verbose_name = 'Todo'
    verbose_name_plural = 'Todos'

  def __str__(self):
    """Unicode representation of Todo."""
    return '%s' % (self.title)

  # def save(self):
  #   """Save method for Todo."""
  #   pass

  # def get_absolute_url(self):
  #   """Return absolute url for Todo."""
  #   return ('')

  # # TODO: Define custom methods here


